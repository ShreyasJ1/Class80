student_array = [];
display_student_array = [];
function submit() {
    for (i = 1; i <= 4; i++) {
        var student_name = document.getElementById("name_of_the_student_" + i).value;
        console.log(student_name);
        student_array.push(student_name);
    }
    var student_array_length = student_array.length;
    console.log(student_array_length);
    for (var j = 0; j < student_array_length; j++) {
        display_student_array.push("<h4> name - " + student_array[j] + "</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    student_array.sort();
    console.log(student_array);
    var sorted_array = [];
    for (var k = 0; k < student_array.length; k++) {
        sorted_array.push("<h4> name : " + student_array[k] + "</h4>");
        console.log(sorted_array);
    }
    document.getElementById("display_name_with_commas").innerHTML = sorted_array;
    var remove_commas = sorted_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}