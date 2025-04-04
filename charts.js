document.addEventListener('DOMContentLoaded', () => {
    // Charging Performance Chart
    const chargingChart = echarts.init(document.getElementById('charging-chart'));
    const chargingOption = {
        animation: false,
        tooltip: { trigger: 'axis', backgroundColor: 'rgba(255, 255, 255, 0.8)', textStyle: { color: '#1f2937' } },
        grid: { top: 10, right: 10, bottom: 30, left: 60 },
        xAxis: {
            type: 'category',
            data: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
            axisLine: { lineStyle: { color: '#d1d5db' } },
            axisLabel: { color: '#1f2937' }
        },
        yAxis: {
            type: 'value',
            name: 'Charging Power (kW)',
            nameTextStyle: { color: '#1f2937' },
            axisLine: { lineStyle: { color: '#d1d5db' } },
            axisLabel: { color: '#1f2937' },
            splitLine: { lineStyle: { color: '#e5e7eb' } }
        },
        series: [{
            name: 'Charging Power',
            type: 'line',
            data: [10, 270, 270, 260, 240, 210, 180, 150, 120, 80, 50],
            smooth: true,
            symbol: 'none',
            lineStyle: { width: 4, color: 'rgba(87, 181, 231, 1)' },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{ offset: 0, color: 'rgba(87, 181, 231, 0.3)' }, { offset: 1, color: 'rgba(87, 181, 231, 0.05)' }]
                }
            }
        }]
    };
    chargingChart.setOption(chargingOption);

    // Performance Comparison Chart
    const performanceChart = echarts.init(document.getElementById('performance-chart'));
    const performanceOption = {
        animation: false,
        tooltip: { trigger: 'axis', backgroundColor: 'rgba(255, 255, 255, 0.8)', textStyle: { color: '#1f2937' } },
        legend: { data: ['quattro AWD', 'Standard RWD'], textStyle: { color: '#1f2937' }, bottom: 0 },
        grid: { top: 10, right: 10, bottom: 60, left: 60 },
        xAxis: {
            type: 'category',
            data: ['Dry Road', 'Wet Road', 'Snow', 'Gravel', 'Cornering'],
            axisLine: { lineStyle: { color: '#d1d5db' } },
            axisLabel: { color: '#1f2937' }
        },
        yAxis: {
            type: 'value',
            name: 'Traction Index',
            nameTextStyle: { color: '#1f2937' },
            max: 100,
            axisLine: { lineStyle: { color: '#d1d5db' } },
            axisLabel: { color: '#1f2937' },
            splitLine: { lineStyle: { color: '#e5e7eb' } }
        },
        series: [
            { name: 'quattro AWD', type: 'bar', data: [95, 90, 85, 80, 92], itemStyle: { color: 'rgba(87, 181, 231, 1)', borderRadius: 4 } },
            { name: 'Standard RWD', type: 'bar', data: [90, 75, 50, 60, 70], itemStyle: { color: 'rgba(252, 141, 98, 1)', borderRadius: 4 } }
        ]
    };
    performanceChart.setOption(performanceOption);

    // Resize charts when window size changes
    window.addEventListener('resize', () => {
        chargingChart.resize();
        performanceChart.resize();
    });
});