function findStudentIndex(students, searchStudent) {
	let indexStudent = -1;
	let left = 0;
	let right = students.length - 1;
  
	while (left <= right) {
	  const mid = Math.floor((left + right) / 2);
	  if (students[mid] === searchStudent) {
		return mid;
	  } else if (students[mid] < searchStudent) {
		left = mid + 1;
	  } else {
		right = mid - 1;
	  }
	}
  
	return indexStudent;
  }
  
  students = [
	"Andrew",
	"Bobby",
	"Diana",
	"George",
	"Hannah",
	"Isaac",
	"Jasmine",
	"John",
  ];
  students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
  
  console.log(findStudentIndex(students, "John"));
  console.log(findStudentIndex(students2, "Andrew"));
  // ตอบคำถามตรงนี้จ้า
// O(log n) เพราะ จำนวนรอบการทำงานจะเพิ่มขึ้นตามขนาดข้อมูล Input