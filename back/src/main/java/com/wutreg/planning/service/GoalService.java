package com.wutreg.planning.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wutreg.planning.entity.Goal;
import com.wutreg.planning.repository.GoalRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class GoalService {
    
	@Autowired
    private GoalRepository goalRepository;

	public List<Goal> getList() {
		return goalRepository.findAll();
	}
	
    public Goal getOne(Long id) {
        return goalRepository.findById(id).get();
    }

    public Goal create(Goal goal) {
        return goalRepository.save(goal);
    }

    public Goal update(Goal goal) {
        return goalRepository.save(goal);
    }
    
    public void delete(Long id) {
        goalRepository.deleteById(id);
    }

}
