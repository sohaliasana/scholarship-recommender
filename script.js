const scholarships = [
  {
    name: "Post Matric Scholarship (Minorities)",
    qualification: "12th",
    minPercentage: 50,
    gender: "any",
    benefits: "Tuition fees + Maintenance allowance",
    year: "2023",
    features: "For minority students studying in class 11 to PhD",
    link: "https://scholarships.gov.in/"
  },
  {
    name: "Central Sector Scheme of Scholarship",
    qualification: "12th",
    minPercentage: 80,
    gender: "any",
    benefits: "₹10,000 - ₹20,000 per year",
    year: "2023",
    features: "For meritorious students from economically weaker sections",
    link: "https://scholarships.gov.in/"
  },
  {
    name: "AICTE Pragati Scholarship for Girls",
    qualification: "UG",
    minPercentage: 0,
    gender: "female",
    benefits: "₹50,000 per year",
    year: "2023",
    features: "For girl students in technical education",
    link: "https://www.aicte-india.org/schemes/students-development-schemes/Pragati"
  },
  {
    name: "INSPIRE Scholarship (DST)",
    qualification: "UG",
    minPercentage: 85,
    gender: "any",
    benefits: "₹80,000 per year",
    year: "2023",
    features: "For top science stream students after 12th",
    link: "https://online-inspire.gov.in/"
  },
  {
    name: "National Means-cum-Merit Scholarship",
    qualification: "10th",
    minPercentage: 55,
    gender: "any",
    benefits: "₹12,000 per year",
    year: "2022",
    features: "For meritorious students from low-income families",
    link: "https://scholarships.gov.in/"
  }
];

document.getElementById("scholarshipForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const qualification = document.getElementById("qualification").value;
  const percentage = parseFloat(document.getElementById("percentage").value);
  const gender = document.getElementById("gender").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";

  const filtered = scholarships.filter(s => 
    (s.qualification === qualification || qualification === "PG") &&
    percentage >= s.minPercentage &&
    (s.gender === "any" || s.gender === gender)
  );

  if (filtered.length === 0) {
    resultDiv.innerHTML = "<p>No scholarships found matching your criteria.</p>";
    return;
  }

  filtered.forEach(s => {
    const div = document.createElement("div");
    div.className = "scholarship";
    div.innerHTML = `
      <h3>${s.name}</h3>
      <p><strong>Features:</strong> ${s.features}</p>
      <p><strong>Benefits:</strong> ${s.benefits}</p>
      <p><strong>Year:</strong> ${s.year}</p>
      <a href="${s.link}" target="_blank">Visit Website</a>
    `;
    resultDiv.appendChild(div);
  });
});
