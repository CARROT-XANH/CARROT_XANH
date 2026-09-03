	/*-------------------------------------------------------------------------------
	  Tạo nút like
	-------------------------------------------------------------------------------*/

// Lấy tất cả các nút thả tim
var heartButtons = document.querySelectorAll(".heart-button");

// Áp dụng sự kiện click cho tất cả các nút thả tim
heartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Thêm hoặc xóa lớp "clicked" khi được click
        this.classList.toggle("clicked");
    });
});