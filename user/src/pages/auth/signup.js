import React, { useState, useRef } from "react";
import {
  Checkbox,
  Button,
  Text,
  Space,
  Group,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import EmailIcon from "@mui/icons-material/Email";
import Lock from "@mui/icons-material/LockOutlined";
import PersonIcon from "@mui/icons-material/Person";
// import { textAlign } from "@mui/system";

function Signup() {
  const usernameRef = useRef(null);
  const mailRef = useRef(null);
  const passRef = useRef(null);
  const cpassRef = useRef(null);
  const chk = useRef(null);
  var [isChecked, setisChecked] = useState(false);

  function signupbutton() {
    alert(
      "username:" +
        usernameRef.current.value +
        "\nmail:" +
        mailRef.current.value +
        "\npass:" +
        passRef.current.value +
        "\nconfirm pass:" +
        cpassRef.current.value +
        "\nchecked:" +
        isChecked
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div style={{ width: "60%" }}>
        <Group
          direction="column"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text weight={700} style={{ color: "#3d3d3d", fontSize: 24 }}>
            Sign in to your account
          </Text>
          <Space h="ls" />
          <TextInput
            ref={usernameRef}
            icon={<PersonIcon style={{ color: "#3d3d3d" }} />}
            size="lg"
            placeholder="username"
            radius="xs"
            error=""
            style={{ width: "70%" }}
            required
          />
          <Space h="ls" />
          <TextInput
            ref={mailRef}
            icon={<EmailIcon style={{ color: "#3d3d3d" }} />}
            size="lg"
            placeholder="email"
            radius="xs"
            error=""
            style={{ width: "70%" }}
            required
          />
          <Space h="ls" />
          <PasswordInput
            ref={passRef}
            icon={<Lock style={{ color: "#3d3d3d", width: 200 }} />}
            size="lg"
            placeholder="password"
            radius="xs"
            error=""
            style={{ width: "70%" }}
            required
          />
          <Space h="ls" />
          <PasswordInput
            ref={cpassRef}
            icon={<Lock style={{ color: "#3d3d3d", width: 200 }} />}
            size="lg"
            placeholder="confirm password"
            radius="xs"
            error=""
            style={{ width: "70%" }}
            required
          />
          <Space h="ls" />
          <Checkbox
            onChange={(e) => setisChecked(e.target.checked)}
            ref={chk}
            label="I agree to terms of service and privacy policy"
            color="dark"
          />
          <Space h="ls" />
          <Button onClick={signupbutton} color="dark" radius="xs" size="lg">
            Sign up
          </Button>
        </Group>
      </div>

      <div
        style={{
          padding: 20,
          width: "40%",
          backgroundColor: "#3d3d3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Group
          direction="column"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            weight={700}
            style={{ color: "#FFFFFF", fontSize: 24, textAlign: "center" }}
          >
            Welcome to Tunisian Modern Newspaper
          </Text>
          <Space h="xl" />
          <div style={{ width: 200, height: 2, backgroundColor: "#FFFFFF" }} />
          <Space h="xl" />
          <Text
            weight={300}
            style={{ color: "#FFFFFF", fontSize: 16, textAlign: "center" }}
          >
            we are a team of highly motivated indivuals who bla bla bla...it
            will be a great pleasure for you to join us eds eds eds boiiii
          </Text>
        </Group>
      </div>
    </div>
  );
}

export default Signup;
