import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the card horizontally */
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 10px;
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Restrict max width for responsiveness */
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #fff;
`;

export const CardHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding: 20px;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #ccc;
`;

export const Name = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 5px;
  color: #f4c542;
`;

export const StarCount = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;
