package com.example.app.controller.admin.ProductController;

import com.example.app.entity.KieuCoAo;
import com.example.app.service.productService.KieuCoAoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/KCA/")
public class KieuCoAoController {
    @Autowired
    private KieuCoAoService Service;

    @GetMapping
    public ResponseEntity<List<KieuCoAo>> getAll() {

        List<KieuCoAo> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<KieuCoAo> getById(@PathVariable Integer id) {
        Optional<KieuCoAo> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<KieuCoAo> create(@RequestBody KieuCoAo request) {
        KieuCoAo response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<KieuCoAo> update(@PathVariable Integer id, @RequestBody KieuCoAo request) {
        KieuCoAo response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<KieuCoAo> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
