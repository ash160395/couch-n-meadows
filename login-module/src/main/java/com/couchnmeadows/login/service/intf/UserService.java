package com.couchnmeadows.login.service.intf;

import com.couchnmeadows.login.model.User;

public interface UserService {

    void save(User user);

    User findByUsername(String username);
}
