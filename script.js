 // store chart instances to prevent looping
 let lineChartInstance = null;
 let barChartInstance = null;

 // Fetch data based on date range
 function fetchAndRenderCharts() {
     const startDate = document.getElementById("startDate").value;
     const endDate = document.getElementById("endDate").value;

     if (!startDate || !endDate) {
         alert("Please select a valid date range.");
         return;
     }

     // Fetching data with date filtering
     $.getJSON("https://transactions-de4e.onrender.com/transactions", function (data) {
         console.log("Fetched data:", data); 

         // Filter Transactions by Selected Date Range
         const filteredData = data.filter(t => t.date >= startDate && t.date <= endDate);

         console.log("filtered data:", filteredData); 

         if (filteredData.length === 0) {
             alert("No transactions found in this date range.");
             return;
         }

         // Extract Labels (Dates)
         const labels = filteredData.map(d => d.date);

         // Filter Transaction Data
         const successData = filteredData.filter(t => t.status === "success").map(t => t.amount);
         const failedData = filteredData.filter(t => t.status === "failed").map(t => t.amount);
         const pendingData = filteredData.filter(t => t.status === "pending").map(t => t.amount);

         // destroy previous charts before creating new ones
         if (lineChartInstance) {
             lineChartInstance.destroy();
         }
         if (barChartInstance) {
             barChartInstance.destroy();
         }

         // line chart
         const lineCtx = document.getElementById("lineChart").getContext("2d");
         lineChartInstance = new Chart(lineCtx, {
             type: "line",
             data: {
                 labels: labels,
                 datasets: [
                     {
                         label: "Successful Transactions",
                         data: successData,
                         backgroundColor: "rgba(6, 79, 240, 0.2)",
                         borderColor: "#064FF0",
                         borderWidth: 2,
                         fill: true,
                     },
                     {
                         label: "Failed Transactions",
                         data: failedData,
                         backgroundColor: "rgba(255, 48, 48, 0.2)",
                         borderColor: "#FF3030",
                         borderWidth: 2,
                         fill: true,
                     }
                 ]
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 scales: {
                     y: { beginAtZero: true }
                 },
                 plugins: {
                     title: {
                         display: true,
                         text: "Success and Failed Transactions (Line Chart)",
                     },
                     legend: { display: true, position: "top" }
                 }
             },
         });

         // Bar Chart
         const barCtx = document.getElementById("barChart").getContext("2d");
         barChartInstance = new Chart(barCtx, {
             type: "bar",
             data: {
                 labels: labels,
                 datasets: [
                     {
                         label: "Successful Transactions",
                         data: successData,
                         backgroundColor: "rgba(6, 79, 240, 0.8)",
                         borderColor: "#064FF0",
                         borderWidth: 1,
                     },
                     {
                         label: "Failed Transactions",
                         data: failedData,
                         backgroundColor: "rgba(255, 48, 48, 0.8)",
                         borderColor: "#FF3030",
                         borderWidth: 1,
                     },
                     {
                         label: "Pending Transactions",
                         data: pendingData,
                         backgroundColor: "rgba(250, 192, 19, 0.8)",
                         borderColor: "#FAC013",
                         borderWidth: 1,
                     }
                 ]
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 scales: {
                     y: { beginAtZero: true }
                 },
                 plugins: {
                     title: {
                         display: true,
                         text: "Success, Failed & Pending Transactions (Bar Chart)",
                     },
                     legend: { display: true, position: "top" }
                 }
             },
         });

     }).fail(function () {
         console.error("Error fetching data");
     });
 }

 // Auto-fetch all data on page load
 $(document).ready(function () {
     fetchAndRenderCharts(); // Fetch data when the page loads
 });