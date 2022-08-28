package com.example.bai_thi.repository;

import com.example.bai_thi.model.BenhNhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Repository
public interface BenhNhanRepository extends JpaRepository<BenhNhan, Integer> {
    @Query(value = "select * from benh_nhan limit :page, 5 ", nativeQuery = true)
    List<BenhNhan> findAllBenhNhan(@Param("page") Integer page);

    @Query(value = "select * from benh_nhan", nativeQuery = true)
    List<BenhNhan> findAllNoBenhNhan();

    @Query(value = "select * from benh_nhan where id = :id", nativeQuery = true);

    Optional<BenhNhan> findById(@Param("id") Integer id)

    @Modifying
    @Transactional
    @Query(value = "insert into benh_nhan() ", nativeQuery = true)
}
