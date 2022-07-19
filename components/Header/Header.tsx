import React, { useState } from "react";
import {
  createStyles,
  Header as HeaderMantine,
  Container,
  Group,
  Button,
  Burger,
  Title,
} from "@mantine/core";
import Sidebar from "../Sidebar";
import useStyles from "./Header.styles";

interface Links {
  links: {
    label: string;
    link: string;
  }[];
}

const Header = ({ links }: Links) => {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useState(false);
  const items = links.map((link) => {
    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <>
      <Sidebar show={opened} setShow={toggleOpened} links={links} />
      <HeaderMantine
        className="py-2 absolute top-0"
        height={60}
        sx={{ borderBottom: 0, background: "transparent" }}
      >
        <Container className="flex align-items-center h-full" fluid>
          <Group className="flex sm:flex-1">
            <Burger
              opened={opened}
              onClick={() => toggleOpened(!opened)}
              className={classes.burger}
              size="sm"
              color={"white"}
            />
            <Group>
              <Title sx={{
                color: "white"
              }} order={3}>
                Babble
              </Title>
            </Group>
          </Group>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Group sx={{display: "flex", flexGrow: 1, justifyContent: "end"}}>
            <Button
              radius="xl"
              size="md"
              sx={{ height: 30 }}
              variant="white"
              color={"dark"}
              // className="border-white bg-white hover:bg-gray-300 hover:border-gray-300 text-black"
            >
              Login
            </Button>
            <Button
              size="md"
              className="bg-blue-500"
              radius="xl"
              sx={{ height: 30 }}
            >
              Sign up
            </Button>
          </Group>
        </Container>
      </HeaderMantine>
    </>
  );
};

export default Header;
