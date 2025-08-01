package com.hydna.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hydna.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}
