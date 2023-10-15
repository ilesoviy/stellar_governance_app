import Link from 'next/Link';
import Banner from '@/components/banner';
// import ProposalsBody from './proposals/propsBody';
import { getAllPostsData } from '../lib/posts';

// export async function getStaticProps() {
//     const allPostsData = JSON.parse(await getAllPostsData()) 
// 	// console.log('allPostsData:', allPostsData);
//     return {
//         props: {
//             allPostsData,
//         },
//     };
// }

export async function getServerSideProps(context) {
    const allPostsData = JSON.parse(await getAllPostsData());
	// console.log('allPostsData:', allPostsData);
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Proposals({allPostsData}) {
	console.log('allPostsData1:', allPostsData);
    return (
        <div className="flex flex-col mx-auto min-h-screen">
			<Banner />
			<nav className="flex flex-col md:flex-row items-center justify-between p-7">
				<div className="flex flex-col mb-6 md:mb-0">
					<div className="container flex items-center justify-center space-x-6 md:space-x-8">
						<img
							className="max-h-14 md:max-h-20"
							src="/assets/logo-web.png"
							alt=""
						/>
						<div
							className="border-solid border-black border-l-2 md:border-l-4"
							style={{ height: '4.5rem' }}
						></div>
						<div className="flex flex-col items-center min-h-fit">
							<p className="font-roboto text-lg md:text-2xl font-bold">
								community
							</p>
							<p className="font-roboto text-4xl md:text-5xl font-bold tracking-tighter">
								VOTE!
							</p>
						</div>
					</div>
					<div className="flex justify-between mt-5">
						<div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
							<a
								href="https://telluscoop.com"
								className="font-roboto text-xl font-bold"
							>
								home
							</a>
						</div>
						<div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
							<a
								href="https://community.telluscoop.com"
								className="font-roboto text-xl font-bold"
							>
								community
							</a>
						</div>
						<div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
							<a
								href="https://docs.telluscoop.com"
								className="font-roboto text-xl font-bold"
							>
								docs
							</a>
						</div>
						<div className="transition-all hover:skew-x-3 hover:rotate-3 hover:bg-telluscoopPink hover:text-telluscoopWhite">
							<a
								href="https://medium.com/telluscoop"
								className="font-roboto text-xl font-bold"
							>
								blog
							</a>
						</div>
					</div>
				</div>
				<div className="flex min-w-[25%] justify-between items-center">
					{/* userKey && (
						<Link
							href="/proposals/user"
							className="flex flex-col items-center mr-10"
						>
							<img
								className="max-w-[3.5rem] md:max-w-[4rem]"
								src="/assets/user-logo.png"
								alt=""
							/>
							<span className="font-roboto text-sm md:text-md mt-2">
								{userKey.slice(0, 4) + '...' + userKey.slice(-4)}
							</span>
						</Link>
					) */}
					<div>
						<div className="inline-block relative">
							<span className="absolute inset-0 z-0 bg-black translate-x-1 translate-y-1"></span>
							{/* userKey ? (
								<button
									type="button"
									className="relative z-10 px-8 md:px-10 py-2 font-roboto text-xl md:text-2xl border-4 border-black transition-all text-telluscoopWhite bg-telluscoopGreen tracking-wide hover:bg-telluscoopRed"
									onMouseEnter={disconnectText}
									onMouseLeave={originalText}
									onClick={logoutAlbedo}
								>
									Connected
								</button>
							) : */ (
								<button
									type="button"
									className="relative z-10 px-8 md:px-10 py-2 font-roboto text-xl md:text-2xl border-4 border-black transition-all text-telluscoopWhite bg-telluscoopRed tracking-wide hover:bg-telluscoopGreen"
									// onClick={checkAlbedo}
								>
									Connect Wallet
								</button>
							) }
						</div>
					</div>
				</div>
			</nav>

            <ProposalsBody allPostsData={allPostsData}/>
		</div>
    );
}

function ProposalsBody({ allPostsData }) {
	const percentage = 10;
	const percentageStyle = {
		width: `${percentage}%`,
	};

	// const [allPostsData, setAllPostsData] = useState([]);

	// useEffect(async () => {
	// 	const posts = await fetch('/api/posts');

	// 	setAllPostsData(posts);
	// }, []);

	console.log('allPostsData2:', allPostsData);
	return (
		<div className="flex-1 flex flex-col py-5 px-10">
			<h1 className="font-flex text-2xl md:text-3xl mb-7">
				<img
					className="inline-block max-h-8 md:max-h-10 mb-2"
					src="/assets/vote.png"
				/>{' '}
				Community Governance Proposals (CGP)
			</h1>
			<ul className="flex space-x-7 md:space-x-10 font-flex text-lg mb-3 pl-1">
				<li className="text-telluscoopRed hover:cursor-pointer">
					All
				</li>
				<li className="hover:text-telluscoopRed hover:cursor-pointer">
					Active
				</li>
				<li className="hover:text-telluscoopRed hover:cursor-pointer">
					Passed
				</li>
				<li className="hover:text-telluscoopRed hover:cursor-pointer">
					Rejected
				</li>
			</ul>
			<div className="border-black border-[3px] rounded">
				<table className="table-fixed w-full">
					<tbody>
						{allPostsData.map((item) => (
							<tr
								key={item.id}
								className={
									item.tag === 'active'
										? 'bg-telluscoopLightGreen'
										: item.tag === 'rejected'
										? 'bg-telluscoopLightRed'
										: 'bg-telluscoopLightGray'
								}
							>
								<td className="flex flex-col md:flex-row px-5 py-3 justify-between items-center md:items-stretch">
									<div className="flex flex-col md:w-[70%] mb-8 md:mb-0">
										<div className="flex items-center mb-2">
											<h2 className="font-flex text-xl font-bold tracking-wide mr-5">
												{item.proposal}
											</h2>
											<span className="font-flex text-sm italic tracking-wide">
												{/* dates[index] > 1
													? dates[index] + ' days left'
													: dates[index] + ' day left' */}
											</span>
										</div>
										<div>
											<p className="font-flex text-base">{item.description}</p>
										</div>
									</div>
									<div className="flex pr-6 md:pr-0 mb-2 md:mb-0">
										<div className="flex items-end pr-2">
											<span className="font-flex text-xs font-bold">{`${percentage}%`}</span>
										</div>
										<div className="flex flex-col items-center justify-between pt-1">
											{/* userKey ? (
												<Link href={item.id}>
													<div className="inline-block relative">
														<span className="absolute inset-0 z-0 bg-black translate-x-0.5 translate-y-0.5 rounded"></span>
														<button
															type="button"
															className="relative z-10 px-8 py-1 font-mono text-2xl border-4 border-black transition-all text-telluscoopWhite bg-telluscoopGreen tracking-wide rounded hover:bg-telluscoopPink"
														>
															VOTE
														</button>
													</div>
												</Link>
											) : */ (
												<div>
													<div className="inline-block relative">
														<span className="absolute inset-0 z-0 bg-black translate-x-0.5 translate-y-0.5 rounded"></span>
														<button
															type="button"
															className="relative z-10 px-8 py-1 font-mono text-2xl border-4 border-black transition-all text-stone-700 bg-gray-400 tracking-wide rounded cursor-default"
														>
															VOTE
														</button>
													</div>
												</div>
											)}

											<div className="w-full mt-3 relative h-3 mb-0.5">
												<div className="bg-neutral-500 absolute top-0 left-0 h-3 w-full rounded border-2 border-black"></div>
												<div
													className="bg-telluscoopYellow absolute top-0 left-0 h-3 rounded border-2 border-black"
													style={percentageStyle}
												></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
