package com.example.app.controller.admin.ProductController;

import com.example.app.dto.ProductDetailDto;
import com.example.app.entity.SanPham;
import com.example.app.entity.SanPhamChiTiet;
import com.example.app.entity.SanPhamChiTiet;
import com.example.app.repository.ProduRepository.*;
import com.example.app.service.productService.SanPhamChiTietService;
import com.example.app.service.productService.SanPhamChiTietService;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/SPCT/")
public class SanPhamChiTietController {
    @Autowired
    private SanPhamChiTietService Service;
    @Autowired
    private MauSacRepository mauSacRepository;
    @Autowired
    private SanphamRepository sanphamRepository;
    @Autowired
    private KichThuocRepository kichThuocRepository;
    @Autowired
    private LoaiHoaTietRepository loaiHoaTietRepository;
    @Autowired
    private MoTaHoaTietRepository moTaHoaTietRepository;
    @Autowired
    private NuocSanXuatRepository nuocSanXuatRepository;
    @Autowired
    private ThuongHieuRepository thuongHieuRepository;
    @Autowired
    private KieuCoAoRepository kieuCoAoRepository;
    @Autowired
    private KieuTayAoRepository kieuTayAoRepository;
    @Autowired
    private KieuDangAoRepository kieuDangAoRepository;
    @Autowired
    private ChatLieuRepository chatLieuRepository;
    @Autowired
    private DoDayCuVaiRepository doDayCuVaiRepository;
    @Autowired
    private KhaNangCoDanRepository khaNangCoDanRepository;
    @Autowired
    private SanPhamChiTietRepository sanPhamChiTietRepository;

    @GetMapping
    public ResponseEntity<List<SanPhamChiTiet>> getAll() {

        List<SanPhamChiTiet> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<SanPhamChiTiet> getById(@PathVariable Integer id) {
        Optional<SanPhamChiTiet> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

//    @PostMapping("post")
//    public ResponseEntity<?> add(@Valid @RequestBody ProductDetailDto dto, BindingResult bindingResult) throws Exception {
//        if (bindingResult.hasErrors()) {
//            throw new BindException(bindingResult);
//        }
//        SanPhamChiTiet entity = new SanPhamChiTiet();
//        BeanUtils.copyProperties(dto, entity);
//        entity.setMa(dto.getMa());
//        entity.setGia(dto.getGia());
//        entity.setSoLuong(dto.getSoLuong());
//        entity.setMauSac(mauSacRepository.findByTen(dto.getMauSac()).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setSanPham(sanphamRepository.findByTen(dto.getSanPham()).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setKichThuoc(kichThuocRepository.findByTen(dto.getSanPham()).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setLoaiHoaTIet(loaiHoaTietRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setMoTaHoaTiet(moTaHoaTietRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setNuocSanXuat(nuocSanXuatRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setThuongHieu(thuongHieuRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setKieuCoAo(kieuCoAoRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setKieuTaiAo(kieuTayAoRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setKieuDangAo(kieuDangAoRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setChatLieu(chatLieuRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setDoDayCuaVai(doDayCuVaiRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        entity.setKhaNangCoDan(khaNangCoDanRepository.findById(Integer.parseInt(dto.getLoaiHoaTIet())).orElseThrow(() -> new BadRequestException("không tìm thấy ")));
//        return ResponseEntity.status(201).body(entity);
//    }
@PostMapping("post")
public ResponseEntity<SanPhamChiTiet> createSanPham(@RequestBody SanPhamChiTiet request) {
    SanPhamChiTiet response = Service.create(request);
    return ResponseEntity.status(201).body(response);
}
    @PutMapping("{id}")
    public ResponseEntity<SanPhamChiTiet> update(@PathVariable Integer id, @RequestBody SanPhamChiTiet request) {
        SanPhamChiTiet response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<SanPhamChiTiet> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
