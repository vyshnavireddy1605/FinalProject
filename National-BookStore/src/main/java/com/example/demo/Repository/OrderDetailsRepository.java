package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.OrderDetails;


@RepositoryRestResource(path="list")
@CrossOrigin("http://localhost:4200/")

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer>
{
	
}
