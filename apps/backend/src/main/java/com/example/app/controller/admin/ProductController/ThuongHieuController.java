package com.example.app.controller.admin.ProductController;

import com.example.app.entity.ThuongHieu;
import com.example.app.service.productService.ThuongHieuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/TH/")
public class ThuongHieuController {
    @Autowired
    private ThuongHieuService Service;

    @GetMapping
    public ResponseEntity<List<ThuongHieu>> getAll() {

        List<ThuongHieu> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<ThuongHieu> getById(@PathVariable Integer id) {
        Optional<ThuongHieu> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<ThuongHieu> create(@RequestBody ThuongHieu request) {
        ThuongHieu response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<ThuongHieu> update(@PathVariable Integer id, @RequestBody ThuongHieu request) {
        ThuongHieu response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<ThuongHieu> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
