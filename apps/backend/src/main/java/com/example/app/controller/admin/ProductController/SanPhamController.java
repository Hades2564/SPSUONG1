package com.example.app.controller.admin.ProductController;

import com.example.app.entity.NhanVien;
import com.example.app.entity.SanPham;
import com.example.app.service.productService.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/product/")
public class SanPhamController {
    @Autowired
    private SanPhamService sanPhamService;
    @GetMapping
    public ResponseEntity<List<SanPham>> getAll() {

        List<SanPham> result = this.sanPhamService.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<SanPham> getSanPhamById(@PathVariable Integer id) {
        Optional<SanPham> SanPham = sanPhamService.getStaffById(id);
        return SanPham.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<SanPham> createSanPham(@RequestBody SanPham request) {
        SanPham response = sanPhamService.createStaff(request);
        return ResponseEntity.status(201).body(response);
    }
    @PutMapping("{id}")
    public ResponseEntity<SanPham> updateSanPham(@PathVariable Integer id, @RequestBody SanPham request) {
        SanPham response = sanPhamService.updateStaff(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<SanPham> deleteSanPham(@PathVariable Integer id) {
        sanPhamService.deleteStaff(id);
        return ResponseEntity.noContent().build();
    }
}
