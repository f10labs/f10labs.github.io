import Content from "@/components/content";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";

export default function Home() {
  return (
    <article className="text-gray-300">
      <div className="mb-12">
        <Title className="text-4xl md:text-5xl font-bold text-white mb-6">
          Challenges in AI Safety Evaluations: Trust, Independence, and
          Scalability
        </Title>

        <Content className="text-xl leading-relaxed">
          Approaching AGI, AI safety evaluations must grow in both quality and
          quantity, but there is a trust problem: large model developers have
          little incentive to share sensitive data beyond API access to many
          evaluators, primarily due to competitive risk.
        </Content>
      </div>

      <Subtitle className="text-2xl font-semibold text-white mb-4">
        Current State of AI Safety Evaluations
      </Subtitle>
      <div className="bg-gray-800 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <Content>
          <strong className="text-blue-400">Today:</strong> Commercial
          organizations like OpenAI collaborate with chosen oversight
          researchers and selectively publish in-house results. These
          organizations control collaboration, access, resources, and result
          interpretation, including for safety-critical evaluations and x-risk
          assessments.
        </Content>
      </div>
      <Content>
        Most model oversight relies on 1st or 2nd party audits with limited
        independence. Despite their effectiveness, they struggle with model
        provider interest, evaluating complex models, and scaling research to
        cover expanding capabilities.
      </Content>

      <h2 className="text-3xl font-semibold text-white mt-12 mb-6">
        Key Challenges
      </h2>
      <ol className="list-decimal pl-6 space-y-8">
        <li>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Lack of Independence in Audits
          </h3>
          <Content>
            1st and 2nd party audits lack independence, compromising unbiased
            safety and performance measures. The absence of separation between
            evaluation and development can lead to unreliable assessments.
          </Content>
        </li>
        {/* Add other list items here */}
      </ol>

      <h2 className="text-3xl font-semibold text-white mt-12 mb-6">
        Future Outlook
      </h2>
      <div className="bg-gray-800 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
        <Content>
          Hard evaluations remain expensive to develop and release. Few
          overseeing parties have the authority and trust to access model
          internals, limiting long-term accountability in model development.
        </Content>
      </div>
    </article>
  );
}
