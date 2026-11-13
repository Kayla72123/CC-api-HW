const music = new Audio("slowJazz.mp3");
music.loop = true;
music.volume = 0.05;


async function getRandomCat() {
  const url = "https://catfact.ninja/fact";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result.fact);
    document.getElementById("catFact").innerText = result.fact;
  } catch (error) {
    console.error(error.message);
  }
}