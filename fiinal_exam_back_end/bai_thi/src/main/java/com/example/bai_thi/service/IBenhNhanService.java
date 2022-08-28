package com.example.bai_thi.service;

import com.example.bai_thi.model.BenhNhan;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

public interface IBenhNhanService {
    List<BenhNhan> findAllBenhNhan(Integer page);
    List<BenhNhan> findAllNoBenhNhan();
    List<BenhNhan> search(String doctor, String name, String reason, String method, Integer page);

    Optional<BenhNhan> findById(Integer id);

    void save(BenhNhan benhNhan);

    void update(BenhNhan benhNhan);

    void delete(Integer id);

}
