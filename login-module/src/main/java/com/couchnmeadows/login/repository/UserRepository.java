package com.couchnmeadows.login.repository;

import com.couchnmeadows.login.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Long> {
    User findByUsername(String username);
}
