package com.example.app.controller.admin.ProductController;

import com.example.app.entity.MoTaHoaTiet;
import com.example.app.service.productService.MoTaHoaTietService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@Controller
@RequestMapping("/api/MTHT/")
public class MoTaHoaTietController {
    @Autowired
    private MoTaHoaTietService Service;

    @GetMapping
    public ResponseEntity<List<MoTaHoaTiet>> getAll() {

        List<MoTaHoaTiet> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<MoTaHoaTiet> getById(@PathVariable Integer id) {
        Optional<MoTaHoaTiet> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<MoTaHoaTiet> create(@RequestBody MoTaHoaTiet request) {
        MoTaHoaTiet response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<MoTaHoaTiet> update(@PathVariable Integer id, @RequestBody MoTaHoaTiet request) {
        MoTaHoaTiet response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<MoTaHoaTiet> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
