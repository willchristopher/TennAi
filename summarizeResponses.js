document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#summarized-responses-button").addEventListener("click", function() {
    // Example paragraphs built from recent responses data:
    const loveText = "John Doe appreciated the high quality and excellent packaging. Jane Smith highlighted the appealing design and outstanding performance. Emily Davis praised the innovative features and timely updates. Sophia Wilson endorsed the strong build quality and sleek aesthetics. Oliver Martinez valued the concise user manual and seamless software integration. Liam Johnson emphasized the superb craftsmanship and attention to detail. Isabella Rodriguez recognized the intuitive design and responsive customer support. Overall, customers expressed joy and satisfaction with the product.";
    
    const improvementText = "Michael Lee noted minor usability issues and occasional glitches. David Brown mentioned confusing instructions and some design shortcomings. Ava Garcia commented on slight performance delays and the need for better interface responsiveness. A few responses hinted at the desire for enhanced troubleshooting guides. Some users felt that support response time could be improved. Additional feedback pointed to the need for more polished design details. Several customers suggested clearer instructions to boost usability. Overall, the feedback indicated room for improvements to further enhance the user experience.";
      
    document.querySelector("#love-summary").innerText = loveText;
    document.querySelector("#improvement-summary").innerText = improvementText;
    
    // Display the summarized responses window and hide others
    document.querySelector("#summarized-responses-window").style.display = 'block';
    document.querySelector("#recent-responses-window").style.display = 'none';
    document.querySelector("#tracking-window").style.display = 'none';
  });
});
