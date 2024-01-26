import PageHeader from "../../components/PageHeader/PageHeader";
import piggyBank from "../../assets/images/piggy-bank-on-desk.png"
import './Article.scss'

export default function Article() {
	return (
		<>
			<PageHeader title={"Learning Centre"} />
			<main className="main">
				<h1 className="article__title">Article Title</h1>
				<h4 className="article__sub-title">Article Sub-title</h4>
				<img className="article__img" src={piggyBank} alt="piggy bank on desk"></img>
				<h4 className="article__sub-header">Article Sub header</h4>
				<p className="article__para">
					Investing small amounts of money can pave the way to financial security through the magic of compound interest. Even modest contributions, when consistently invested over time, can yield impressive returns. The key is to start early and maintain a disciplined approach.
				</p>
				<p className="article__para">
					By embracing a long-term perspective and leveraging strategies like dollar-cost averaging, investors can navigate market fluctuations with confidence. Technology has made investing more accessible than ever, with platforms offering low fees and minimum requirements, enabling individuals to automate contributions and track their progress effortlessly.
				</p>
				<p className="article__para">
					Diversification is crucial when investing small amounts, spreading risk across various asset classes to enhance returns and mitigate volatility. Regular portfolio reviews ensure alignment with changing financial goals and risk tolerances.
				</p>
				<p className="article__para">
					In conclusion, investing small amounts is not only feasible but also a prudent strategy for building wealth over time. Whether it's through automated contributions or manual deposits, the key is consistency. With patience, discipline, and a focus on long-term growth, even the smallest investments can grow into significant assets.
				</p>
				
			</main>

			<aside>

			{/* carousel component should go here */}

			</aside>
		</>
	);
}