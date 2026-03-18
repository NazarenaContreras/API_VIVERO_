async function getPlants() {
  try {
    const response = await fetch('/plants');
    const data = await response.json();

    const list = document.getElementById('plantsList');
    list.innerHTML = "";

    data.forEach(plant => {
      const li = document.createElement("li");
      li.textContent = plant.name + " - $" + plant.price;
      list.appendChild(li);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

document.getElementById('btnPlantas').addEventListener('click', getPlants);