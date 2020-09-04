import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  dsPhim: any[] = [
    { tenPhim: 'Tenet', gia: 85000, hinhAnh: 'assets/images/tenet.jpg', moTa: 'Tenet là một bộ phim gián điệp phát hành năm 2020 của Mỹ, do Christopher Nolan đạo diễn kiêm chắp bút. Phim có sự tham gia của John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, cùng Kenneth Branagh.' },
    { tenPhim: 'Di nhân trẻ', gia: 85000, hinhAnh: 'assets/images/di-nhan-the-he-moi-the.jpg', moTa: 'The New Mutants là phim điện ảnh Mỹ thuộc thể loại siêu anh hùng pha kinh dị, tác phẩm dựa trên các nhân vật cùng tên trong Marvel Comics. Phim dự kiến được 20th Century Studios ra mắt vào ngày 28/8/2020.' },
    { tenPhim: 'Ác qủy', gia: 85000, hinhAnh: 'assets/images/ac-quy-doi-dau.png', moTa: 'Ác quỷ đối đầu là một bộ phim hành động của Hàn Quốc do đạo diễn Hong Won-chan thực hiện cùng với Hive Media Corp. sản xuất. Phim có sự tham gia của các diễn viên nổi tiếng như Park Jung-min, Hwang Jung-min, Lee Jung-jae và Choi Hee-seo.' },
  ];
  constructor() { }
  phimDangChon: any = null
  ngOnInit(): void {
  }
  xuLyChonPhim(chiTietPhim: any) {
    this.phimDangChon = chiTietPhim
  }
}
