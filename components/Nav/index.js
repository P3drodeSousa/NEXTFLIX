import { NavContainer, MenuItem, ALink } from "./style";
import Link from "next/link";
export default function Nav() {
  return (
    <NavContainer>
      <Link href="/">
        <MenuItem>nextFlix</MenuItem>
      </Link>

      <Link href="/watchlist">
        <ALink>Watchlist</ALink>
      </Link>
    </NavContainer>
  );
}
