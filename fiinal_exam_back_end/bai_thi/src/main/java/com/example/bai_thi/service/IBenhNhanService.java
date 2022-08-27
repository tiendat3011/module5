package com.example.bai_thi.service;

import com.example.bai_thi.model.BenhNhan;

import java.awt.print.Pageable;
import java.util.List;

public interface IBenhNhanService {
    List<BenhNhan> findAll(Pageable pageable);

    BenhNhan save(BenhNhan benhNhan);

    BenhNhan findbyId(int Id);


}
