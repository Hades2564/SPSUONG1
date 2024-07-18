package com.example.app.controller.admin.ProductController;

import com.example.app.entity.KieuDangAo;
import com.example.app.service.productService.KIeuDangAoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/KDA/")
public class KieuDangAoController {
    @Autowired
    private KIeuDangAoService Service;

    @GetMapping
    public ResponseEntity<List<KieuDangAo>> getAll() {

        List<KieuDangAo> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<KieuDangAo> getById(@PathVariable Integer id) {
        Optional<KieuDangAo> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<KieuDangAo> create(@RequestBody KieuDangAo request) {
        KieuDangAo response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<KieuDangAo> update(@PathVariable Integer id, @RequestBody KieuDangAo request) {
        KieuDangAo response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<KieuDangAo> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
