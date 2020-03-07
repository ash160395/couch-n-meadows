package com.couchnmeadows.login.repository;

import com.couchnmeadows.login.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
