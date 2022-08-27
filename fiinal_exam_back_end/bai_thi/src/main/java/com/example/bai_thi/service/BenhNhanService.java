package com.example.bai_thi.service;

import com.example.bai_thi.model.BenhNhan;
import com.example.bai_thi.repository.BenhNhanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;

@Service
public class BenhNhanService implements IBenhNhanService{
    @Autowired
    private BenhNhanRepository benhNhanRepository;
    @Override
    public List<BenhNhan> findAll(Pageable pageable) {
        return benhNhanRepository.findAll(pageable);
    }

    @Override
    public BenhNhan save(BenhNhan benhNhan) {
        return null;
    }

    @Override
    public BenhNhan findbyId(int Id) {
        return null;
    }
}
