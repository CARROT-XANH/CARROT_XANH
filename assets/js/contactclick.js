
    document.getElementById("map-button").addEventListener("click", function() {
        window.open("https://www.google.com/maps?q=Sảnh+R2,+Royal+City,+72A+Nguyễn+Trãi,+phường+Thượng+Đình,+quận+Thanh+Xuân,+Hà+Nội", "_blank");
    });

    document.getElementById("email-button").addEventListener("click", function() {
        const email = "carrotxanh.designer@gmail.com";
        const subject = encodeURIComponent("LIÊN HỆ HỢP TÁC");
        const body = encodeURIComponent("Chào bạn CarrotXanh,\n\nTôi muốn trao đổi thêm về dự án thiết kế. Mong bạn phản hồi sớm!\n\nTrân trọng,");
        
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });

    document.getElementById("call-button").addEventListener("click", function() {
        window.location.href = "tel:0356040477";
    });