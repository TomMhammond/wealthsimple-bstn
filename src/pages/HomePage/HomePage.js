import PageHeader from "../../components/PageHeader/PageHeader";
import AccountOverview from "../../pages/AccountOverview/AccountOverview"

export default function HomePage() {
	return (
		<>
			<PageHeader title={"Home"} />
			<AccountOverview />

		</>
	);
}
