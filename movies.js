async function fetchData() {
  try {
    const response = await fetch('https://v2.api.noroff.dev/square-eyes/');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


 