package com.example.app.controller.admin.ProductController;

import com.example.app.entity.KhaNangCoDan;
import com.example.app.service.productService.KhaNangCoDanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/KNCD/")
public class KhaNangCoDanController {
    @Autowired
    private KhaNangCoDanService Service;

    @GetMapping
    public ResponseEntity<List<KhaNangCoDan>> getAll() {

        List<KhaNangCoDan> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<KhaNangCoDan> getById(@PathVariable Integer id) {
        Optional<KhaNangCoDan> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<KhaNangCoDan> create(@RequestBody KhaNangCoDan request) {
        KhaNangCoDan response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<KhaNangCoDan> update(@PathVariable Integer id, @RequestBody KhaNangCoDan request) {
        KhaNangCoDan response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<KhaNangCoDan> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
