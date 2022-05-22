import React, { useState } from "react";

// We import our own stylesheet.
import styles from "./navbar.module.scss";

// bootstrap navbar
import {
	CNavbar,
	CContainer,
	CNavbarBrand,
	CCollapse,
	CNavbarToggler,
	CNavbarNav,
	CNavItem,
	CNavLink,
	CDropdown,
	CDropdownToggle,
	CDropdownMenu,
	CDropdownItem,
	CDropdownDivider,
} from "@coreui/bootstrap-react";

// Here, we display our Navbar
export default function Navbar() {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<div className={styles.navbar}>
				<CNavbar expand="lg" colorScheme="light" className="bg-light">
					<CContainer fluid>
						<CNavbarBrand href="/">Home</CNavbarBrand>
						<CNavbarToggler
							aria-label="Toggle navigation"
							aria-expanded={visible}
							onClick={() => setVisible(!visible)}
						/>
						<CCollapse className="navbar-collapse" visible={visible}>
							<CNavbarNav>
								<CNavItem>
									<CNavLink href="/resume">Resume</CNavLink>
								</CNavItem>
								<CDropdown variant="nav-item" popper={false}>
									<CDropdownToggle>MongoDB</CDropdownToggle>
									<CDropdownMenu>
										<CDropdownItem href="/records">Go To Records</CDropdownItem>
										<CDropdownItem href="/records/create">Create Record</CDropdownItem>
										<CDropdownDivider />
										<CDropdownItem target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com">
											MongoDB Website
										</CDropdownItem>
									</CDropdownMenu>
								</CDropdown>
								<CDropdown variant="nav-item" popper={false}>
									<CDropdownToggle>React Apps</CDropdownToggle>
									<CDropdownMenu>
										<CDropdownItem href="/react/diceroller">Dice Roller</CDropdownItem>
										<CDropdownItem href="/react/basketball">Basketball Game</CDropdownItem>
										<CDropdownItem href="/react/tictactoe">TicTacToe</CDropdownItem>
									</CDropdownMenu>
								</CDropdown>
							</CNavbarNav>
						</CCollapse>
					</CContainer>
				</CNavbar>
			</div>
		</>
	);
}
