/**
 *
 * provide current logged-in user and auto login user after registration
 */


package com.couchnmeadows.login.service.intf;

public interface SecurityService {

    String findLoggedInUsername();

    void autoLogin(String username, String password);
}
