document.addEventListener("DOMContentLoaded", function () {
    const jokeElement = document.getElementById("joke");
    const getJokeBtn = document.getElementById("get-joke-btn");
    const categorySelect = document.getElementById("joke-category");
    const loadingSpinner = document.getElementById("loading-spinner");
  
    // Function to fetch and display the joke
    async function fetchJoke(category) {
      try {
        // Show the loading spinner and hide the joke
        loadingSpinner.classList.remove("hidden");
        jokeElement.classList.add("hidden");
  
        // Fetch the joke from JokeAPI
        const response = await fetch(
          `https://v2.jokeapi.dev/joke/${category}?safe-mode&type=single&idRange=`
        );
        const data = await response.json();
  
        // Display the joke after the loading
        jokeElement.textContent = data.joke;
      } catch (error) {
        jokeElement.textContent = "Oops! Something went wrong.";
      } finally {
        // Hide the spinner and show the joke once fetched
        loadingSpinner.classList.add("hidden");
        jokeElement.classList.remove("hidden");
      }
    }
  
    // Event listener for the button
    getJokeBtn.addEventListener("click", () => {
      const selectedCategory = categorySelect.value;
      fetchJoke(selectedCategory);
    });
  
    // Fetch an initial joke when the page loads
    fetchJoke(categorySelect.value);
  });
  