package com.example.app.controller.admin.ProductController;

import com.example.app.entity.KieuTaiAo;
import com.example.app.service.productService.KieuTayAoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/KTA/")
public class KieuTayAoController {
    @Autowired
    private KieuTayAoService Service;

    @GetMapping
    public ResponseEntity<List<KieuTaiAo>> getAll() {

        List<KieuTaiAo> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<KieuTaiAo> getById(@PathVariable Integer id) {
        Optional<KieuTaiAo> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<KieuTaiAo> create(@RequestBody KieuTaiAo request) {
        KieuTaiAo response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<KieuTaiAo> update(@PathVariable Integer id, @RequestBody KieuTaiAo request) {
        KieuTaiAo response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<KieuTaiAo> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
