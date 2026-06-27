import styled from "styled-components";
import { media } from "@/styles/breakpoints";

export const Page = styled.main`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};

  ${media.tablet} {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Shell = styled.section`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing.lg};

  ${media.tablet} {
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeaderCopy = styled.div`
  max-width: 760px;
`;

export const PhaseLabel = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductName = styled.h1`
  font-size: clamp(2.2rem, 6vw, 4.4rem);
  line-height: 1;
  letter-spacing: 0;
  margin: ${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.md};
`;

export const Mission = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
`;

export const StatusBadge = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentMuted};
  border-radius: ${({ theme }) => theme.radii.panel};
  background: rgba(14, 116, 144, 0.2);
  color: #cffafe;
  font-size: 0.9rem;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  white-space: nowrap;
`;

export const DashboardGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.desktop} {
    grid-template-columns: minmax(0, 1.5fr) minmax(320px, 0.8fr);
  }
`;

export const Panel = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.panel};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const PanelTitle = styled.h2`
  font-size: 1.1rem;
  margin: 0;
`;

export const PanelDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.92rem;
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
`;

export const PanelType = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
`;

export const MapPlaceholder = styled.div`
  min-height: 380px;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.panel};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const MapMarker = styled.div`
  width: 86px;
  height: 86px;
  border: 1px solid ${({ theme }) => theme.colors.accentMuted};
  border-radius: 50%;
  background: rgba(56, 189, 248, 0.08);
  margin: 0 auto ${({ theme }) => theme.spacing.md};
`;

export const PlaceholderText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
  margin: 0;
  max-width: 360px;
  text-align: center;
`;

export const SideStack = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const IntelligenceList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const IntelItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.panel};
  background: rgba(5, 8, 18, 0.45);
  padding: ${({ theme }) => theme.spacing.md};
`;

export const IntelLabel = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin: 0;
  text-transform: uppercase;
`;

export const IntelValue = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
`;
