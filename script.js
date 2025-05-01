const scholarships = [
  {
    name: "National Merit Scholarship",
    qualification: "12th",
    minPercentage: 85,
    gender: "Any"
  },
  {
    name: "Women in STEM",
    qualification: "UG",
    minPercentage: 75,
    gender: "Female"
  },
  {
    name: "Postgrad Achievers",
    qualification: "PG",
    minPercentage: 70,
    gender: "Any"
  },
  {
    name: "Undergrad Bright Future",
    qualification: "UG",
    minPercentage: 90,
    gender: "Any"
  },
  {
    name: "Girls Education Support",
    qualification: "10th",
    minPercentage: 80,
    gender: "Female"
  }
];

document.getElementById("scholarshipForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const qualification = document.getElementById("qualification").value;
  const percentage = parseFloat(document.getElementById("percentage").value);
  const gender = document.getElementById("gender").value;

  const filtered = scholarships.filter((s) => {
    return (
      s.qualification === qualification &&
      s.minPercentage <= percentage &&
      (s.gender === "Any" || s.gender === gender)
    );
  });

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h3>Recommended Scholarships:</h3>";

  if (filtered.length === 0) {
    resultsDiv.innerHTML += "<p>No scholarships match your criteria.</p>";
  } else {
    const ul = document.createElement("ul");
    filtered.forEach((scholarship) => {
      const li = document.createElement("li");
      li.textContent = scholarship.name;
      ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
  }
});
