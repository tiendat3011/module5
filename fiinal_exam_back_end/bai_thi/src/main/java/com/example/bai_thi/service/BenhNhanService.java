package com.example.bai_thi.service;

import com.example.bai_thi.model.BenhNhan;
import com.example.bai_thi.repository.BenhNhanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Service
public class BenhNhanService implements IBenhNhanService {
    @Autowired
    private BenhNhanRepository benhNhanRepository;

    @Override
    public List<BenhNhan> findAllBenhNhan(Integer page) {
        return benhNhanRepository.findAllBenhNhan(page);
    }

    @Override
    public List<BenhNhan> findAllNoBenhNhan() {
        return benhNhanRepository.findAllNoBenhNhan();
    }

    @Override
    public void save(BenhNhan benhNhan) {
        benhNhanRepository.save(
                benhNhan.getBenhAn().getId(),
                benhNhan.getDateStart(),
                benhNhan.getDateEnd(),
                benhNhan.getLyDo(),
                benhNhan.getPhuongPhap(),
                benhNhan.getBacSi());
    }

    @Override
    public void update(BenhNhan benhNhan) {
        benhNhanRepository.update(benhNhan.getDateStart(),
                benhNhan.getDateEnd(),
                benhNhan.getLyDo(),
                benhNhan.getPhuongPhap(),
                benhNhan.getBacSi(),
                benhNhan.getId());
    }

    @Override
    public void delete(Integer id) {
        benhNhanRepository.delete(id);
    }
}
