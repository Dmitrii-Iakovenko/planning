package com.wutreg.planning.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.wutreg.planning.entity.Goal;

public interface GoalRepository extends JpaRepository<Goal, Long> {
}