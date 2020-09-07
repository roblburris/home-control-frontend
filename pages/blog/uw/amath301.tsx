import React from 'react';
import Template from '../../template';

function Blog(): JSX.Element {
    return (
        <Template>
            <div>
                <h1 style={{textAlign: 'center'}}>Course Review: AMATH 301</h1>
                <p>
                    This is a course review of AMATH 301 — Beginning Scientific
                    Computing. I took this class in Summer 2020 with Alanna Gary
                    and was my first class in the Applied Mathematics department
                    here at UW. Overall, I found this to a pretty reasonable class
                    that helped introduce me to the field of Applied Mathematics.
                </p>

                <h3> Overview, Covered Material, & Course Structure </h3>
                <p>
                    AMATH 301 is meant to serve as introduction to scientific and
                    mathematical computing using MATLAB. This meant its only
                    prerequiste was MATH 125 (integral calculus). Since I took the
                    honors calculus series here at UW (MATH 13x) which covers
                    differential equations and linear algebra in addition to
                    differential, integral, and multivariable calculus, I was
                    already familiar with a lot of the mathematical material
                    covered. For instance, some of the lectures provided an
                    introduction to things like matrices,
                    eigenvalues/eigenvectors, Taylor Series, and ordinary
                    differential equations which were all things I had already
                    learned in MATH 13x. Additionally, since the class assumes no
                    prior programming knowledge, a lot of the beginning material
                    was dedicated to explaining programming basics like variables
                    and for loops. Despite already knowing a lot of the
                    programming and conceptual mathematical topics, I took this
                    class because it is a requirement to apply to the Applied Math
                    major here at UW which I plan to double major in along side
                    Computer Science.
                    
                    <br/>
                    <br/>
                    Here is a list of topics covered when I took the class:
                    <ul>
                        <li> 
                            Root and min/max finding algorithms (Newton-Raphson,
                            Bisection, Golden Section Search)
                        </li>

                        <li>
                            Big O Notation 
                        </li>

                        <li>
                            Solving linear systems of equations (Gaussian
                            elimination, LU Decomposition, Jacobi Iteration,
                            Gauss-Seidel Iteration)
                        </li>

                        <li>
                            Optimization and Gradient Descent
                        </li>

                        <li>
                            Curve fitting
                        </li>

                        <li>
                            Numerical differentiation/integration
                        </li>

                        <li>
                            Time-stepping methods for solving ODEs
                        </li>

                        <li>
                            COVID-19 Modeling and Singular Value Decomposition
                            (Optional material)
                        </li>
                    </ul>

                    Since Summer 2020 was still in the midst of the COVID-19
                    pandemic, all classes were conducted remotely. Each week, we
                    were required to watch several prerecorded lectures, complete
                    a programming assigment in MATLAB (45% of our grade), complete
                    an activity (20% of our grade), and take an open book (but not
                    open internet) quiz every Friday (35% of our grade). I found
                    the workload to be very reasonable and not stressful at all
                    especially when it was revealed we would be able to drop our
                    lowest quiz and homework score.
                </p>
                                
                <h3> My Thoughts on the Class</h3>
                <p>
                    Overall, I found AMATH 301 to be a pretty reasonable class.
                    Though I did already have experience with things like ODEs,
                    solving linear systems, and eigenvalues/eigenvectors from MATH
                    13x, I was still able to learn a lot during the class mainly
                    because the class focused on the applications rather than the
                    conceptual groundings of those topics. For example, I came
                    into the course already knowing what an eigenvalue and
                    eigenvector were but I ended up learning that they can be used
                    to determine whether or not an iterative method for solving
                    linear systems would converge or diverge. It was also very
                    interesting to see how ODEs are solved since I never learned
                    Euler's method or other time stepping algorithms in MATH 13x.
                    For that reason, I am both glad and disappointed that I came
                    in already knowing like half the material — I really only had
                    to put in half the effort but at the same time it felt like I
                    was only learning new things half the time.
                    
                    <br />
                    <br />

                    I'm not too sure on the validity of this but apparently my quarter is the last quarter that the Applied Math department will be using MATLAB in AMATH 301 and instead will be teaching in Python in the future. I think this makes a lot of sense since Python is extremely friendly to beginners and becoming more and more used in scientific computing. I will say that I am glad though that I took it before the switch since I did not have very much experience with MATLAB before this and already had lots of experience with Python. I also think this is a great class for anyone in STEM or interested in applied math. If already know more advanced math and how to program, I think that a lot of the material could be self-studied (especially since most lectures are uploaded on <a style={{color: 'black'}} href='https://www.youtube.com/channel/UCEirPnFv_2QbvzrM67SnKPA/videos'>YouTube</a>) but if you want to take higher level Applied Math classes like me, you're going to have to take this class regardless of prior knowledge.
                </p>
            </div>
        </Template>
    );
}

export default Blog;