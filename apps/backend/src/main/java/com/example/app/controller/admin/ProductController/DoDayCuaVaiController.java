package com.example.app.controller.admin.ProductController;

import com.example.app.entity.DoDayCuaVai;
import com.example.app.service.productService.DoDayCuaVaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/DDCV/")
public class DoDayCuaVaiController {
    @Autowired
    private DoDayCuaVaiService Service;

    @GetMapping
    public ResponseEntity<List<DoDayCuaVai>> getAll() {

        List<DoDayCuaVai> result = this.Service.getAll();
        return ResponseEntity.ok(result);
    }

    @GetMapping("{id}")
    public ResponseEntity<DoDayCuaVai> getById(@PathVariable Integer id) {
        Optional<DoDayCuaVai> KichThuoc = Service.getById(id);
        return KichThuoc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("post")
    public ResponseEntity<DoDayCuaVai> create(@RequestBody DoDayCuaVai request) {
        DoDayCuaVai response = Service.create(request);
        return ResponseEntity.status(201).body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<DoDayCuaVai> update(@PathVariable Integer id, @RequestBody DoDayCuaVai request) {
        DoDayCuaVai response = Service.update(id, request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<DoDayCuaVai> delete(@PathVariable Integer id) {
        Service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
