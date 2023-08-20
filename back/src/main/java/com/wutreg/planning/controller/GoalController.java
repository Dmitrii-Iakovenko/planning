package com.wutreg.planning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wutreg.planning.entity.Goal;
import com.wutreg.planning.service.GoalService;

@RestController
@RequestMapping("/api/v1/goals")
public class GoalController {
    
	@Autowired GoalService goalService;
	
	@GetMapping
	public List<Goal> getList() {
	    return goalService.getList();
	}
	
	@GetMapping("/{id}")
	public Goal getOne(@PathVariable Long id) {
	    return goalService.getOne(id);
	}

   @PostMapping
    public Goal create(@RequestBody Goal goal) {
        return goalService.create(goal);
    }
	
	@PutMapping("/{id}")
	public Goal update(@PathVariable Long id, @RequestBody Goal goal) {
	    return goalService.update(goal);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
	    goalService.delete(id);
	}

}
