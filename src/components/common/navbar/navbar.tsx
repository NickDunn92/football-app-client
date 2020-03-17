import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface NavbarProps extends RouteComponentProps {
    user: any;
    onLogout: () => void;    
}
 
const Navbar: React.FC<NavbarProps> = ({ user, onLogout, history }) => {

    const handleHomeClick = () => {
        history.push('/home');
    }

    const handlePlayersClick = () => {
        history.push('/players');
    }

    const handleTeamClick = () => {
        history.push('/team');
    }

    const handleFixturesClick = () => {
        history.push('/fixtures');
    }

    const handleProfileClick = () => {
        history.push('/profile');
    }    

    const renderUserInformation = () => {
        if (user) {
            return (
                <>
                    <Menu.Item
                        onClick={handleHomeClick}
                        name='home'
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item onClick={handlePlayersClick}>
                        Players
                    </Menu.Item>
                    <Menu.Item onClick={handleTeamClick}>
                        Team
                    </Menu.Item>
                    <Menu.Item onClick={handleFixturesClick}>
                        Fixtures
                     </Menu.Item>

                     <Menu.Menu position='right'>
                         <Menu.Item onClick={handleProfileClick}>{user.username}</Menu.Item>
                         <Menu.Item onClick={onLogout}>Log out</Menu.Item>
                     </Menu.Menu>
                </>
            );
        } else {
            return (
                <>
                </>
            )
        }
    }

    return (  
        <Menu stackable>
            {renderUserInformation()}
        </Menu>
    );
}

export default withRouter(Navbar);