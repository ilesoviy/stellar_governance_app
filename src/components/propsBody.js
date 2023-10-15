import { useState, useEffect } from "react";
import Link from 'next/Link';
// import useSWR from 'swr';

// const fetcher = (url) => fetch(url).then((res) => res.json());

// function Posts() {
// 	const { data, error, isLoading } = useSWR('/api/posts', fetcher)
// 	if (error) return []
// 	if (isLoading) return []
// 	return data.posts
// }


async function getPosts() {
	try {
		const res = await fetch(`/api/posts`);

		const resData = await res.json();
		// console.log('resData:', resData);
		if (resData.error) {
			console.error('error1:', resData.error);
		} else {
			if (resData.posts !== undefined) {
				return resData.posts;
			} else {
				console.log(`can't extract data!`);
			}
		}
	} catch (error) {
		console.error('error2:', error);
	}

	return [];
}


export default function ProposalsBody() {
	const percentage = 10;
	const percentageStyle = {
		width: `${percentage}%`,
	};

	// const data = Posts();
	// console.log('data:', data);
	
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const posts = await getPosts();

			console.log('posts:', posts);
			setData(posts);
		}

		fetchData();
	}, []);

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
						{data?.map((item) => (
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
