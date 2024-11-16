import React, { useState } from "react";
import { Container, Switch, TextField, Button, Typography, Box } from "@mui/material";

function App() {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const payload = { toggle, message };

    try {
      const response = await fetch("YOUR_API_GATEWAY_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Data saved successfully!");
      } else {
        alert("Failed to save data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        ร้านยุ้ยแฮร์แอนด์บิวตี้
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center" marginBottom="20px">
        <Typography variant="body1">ร้านว่าง:</Typography>
        <Switch
          checked={toggle}
          onChange={(e) => setToggle(e.target.checked)}
          color="primary"
        />
      </Box>
      <TextField
        label="ข้อความที่ต้องการบอกลูกค้า"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ padding: "10px 20px" }}
      >
        ยืนยันสถานะ
      </Button>
    </Container>
  );
}

export default App;
