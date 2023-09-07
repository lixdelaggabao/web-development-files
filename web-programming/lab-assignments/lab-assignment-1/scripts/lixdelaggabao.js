/* 
    Name: Lixdel Louisse L. Aggabao
    File name: lixdelaggabao.js
    Date created: July 5, 2023
    Description: This contains the scripts used in my personal website.
*/

// Search course functionality
function searchCourse() {
    let courseItems = Array.from(document.getElementsByClassName("course-item"));
	let searchValue = document.getElementById("search-bar").value.toLowerCase();
    let currentFilterId = document.getElementsByClassName("filter-level-button active")[0].id;
    let currentFilter = currentFilterId.split("-")[1];

	// Iterate through all courses
    courseItems.forEach(courseItem => {
        let courseName = courseItem.getElementsByClassName("course-name")[0];
        let courseCode = courseItem.getElementsByClassName("course-code")[0];
        let courseLevel = courseItem.getElementsByClassName("course-level")[0];
		let courseNameText = courseName.textContent || courseName.innerText;
        let courseCodeText = courseCode.textContent || courseCode.innerText;
        let courseLevelText = courseLevel.textContent || courseLevel.innerText;

		// Check if the search text is included in either the course name or code and if the course level matches the filter
        if ((courseNameText.toLowerCase().includes(searchValue) || courseCodeText.split(": ")[1].toLowerCase().includes(searchValue))
            && (currentFilter === "all" || courseLevelText.split(": ")[1] === currentFilter)) {
			// Display course
			courseItem.style.display = "";
		} else {
			// Hide course
			courseItem.style.display = "none"; 
		}
    });
}

// Filter courses by level functionality
function filterLevel(filterButtonId) {
	let filterButtons = Array.from(document.getElementsByClassName("filter-level-button"));
	let clickedButton = document.getElementById(filterButtonId);

	// Remove active for all buttons
    filterButtons.forEach(filterButton => {
        filterButton.classList.remove("active");
    });

	// Add active to the clicked button
	clickedButton.classList.add("active");
    searchCourse();
}

// Sort courses functionality
function sortCourses() {
    let sortOption = document.getElementById("sort").value;
	let courseList = document.getElementById("course-list");
	let courseItems = document.getElementsByClassName("course-item");
    let sortedItems = Array.from(courseItems);

	// Sort all courses
	sortedItems.sort((a, b) => {
		let levelA = a.getElementsByClassName("course-level")[0];
		let levelB = b.getElementsByClassName("course-level")[0];
        let levelAText = levelA.textContent.split(": ")[1] || levelA.innerText.split(": ")[1];
        let levelBText = levelB.textContent.split(": ")[1] || levelB.innerText.split(": ")[1];

		// Check if different course levels
		if (levelAText !== levelBText) {
			// Compare course levels
			if (sortOption === "ascending") {
				return levelAText - levelBText;
			} else if (sortOption === "descending") {
				return levelBText - levelAText;
			}
		} else {
            let nameA = a.getElementsByClassName("course-name")[0];
            let nameB = b.getElementsByClassName("course-name")[0];
			let nameAText = nameA.textContent || nameA.innerText;
			let nameBText = nameB.textContent || nameB.innerText;

			// Compare course names
			if (sortOption === "ascending") {
				return nameAText.localeCompare(nameBText);
			} else if (sortOption === "descending") {
				return nameBText.localeCompare(nameAText);
			}
		}
	});

    sortedItems.forEach(sortedItem => courseList.appendChild(sortedItem));
}