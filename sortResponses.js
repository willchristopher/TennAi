document.addEventListener('DOMContentLoaded', function() {
  const unsorted = document.getElementById('unsorted-responses');
  const satisfactoryContainer = document.getElementById('satisfactory');
  const unsatisfactoryContainer = document.getElementById('unsatisfactory');
  
  if (unsorted && satisfactoryContainer && unsatisfactoryContainer) {
    const responses = unsorted.querySelectorAll('.response');
    responses.forEach(response => {
      const rating = parseInt(response.getAttribute('data-rating'), 10);
      if (rating >= 8) {
        satisfactoryContainer.appendChild(response);
      } else {
        unsatisfactoryContainer.appendChild(response);
      }
    });
  }
});
